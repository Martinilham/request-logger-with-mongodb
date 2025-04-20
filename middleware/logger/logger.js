import Log from "../../models/log.js";
// memakai library ua parser
import {UAParser} from "ua-parser-js"; // bakal error default jika tidak ada kurung

const requestLogger = (options = {}) => {
  const methodsToLog = options.methods || ["POST", "PUT", "GET", "DELETE"];
  const getClientIp = (req) => {
    return (
      req.headers["x-forwarded-for"]?.split(",")[0]?.trim() || // via proxy/CDN
      req.connection?.remoteAddress ||
      req.socket?.remoteAddress ||
      req.ip
    );
  };

  return async (req, res, next) => {
    //konfigurasi uaparser
    const parser = new UAParser();
    const ua = parser.setUA(req.headers["user-agent"]).getResult();

    // membuat deteksi device
    const deviceInfo = `${ua.device.vendor || "Unknown"} ${
      ua.device.model || ""
    } (${ua.os.name} ${ua.os.version}) - ${ua.browser.name} ${
      ua.browser.version
    }`;


    if (methodsToLog.includes(req.method)) {
      const logEntry = new Log({
        ip: getClientIp(req),
        method: req.method,
        endpoint: req.originalUrl,
        device: deviceInfo,
        user: req.user?.username || null, // asumsikan `req.user` udah di-set auth middleware
      });

      try {
        await logEntry.save();
      } catch (err) {
        console.error("Gagal menyimpan log:", err.message);
      }
    }

    next();
  };
};

export default requestLogger;
