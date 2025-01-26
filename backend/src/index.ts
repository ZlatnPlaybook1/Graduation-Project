import express from "express";
import * as dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import registerRouter from "./registerWithAuthentication/register.router";
import loginRouter from "./login/login.router";
import logoutRouter from "./logout/logout.router";
import dashboardRouter from "./dashboard/dashboard.router";
import lab1 from "./labs/cookiesLab/lab1/lab1.router";
import lab2 from "./labs/cookiesLab/lab2/lab2.router";
import hiddenData from "./labs/sqlInjectionLabs/lab1/hiddenData.router";
import lab2xss from "./labs/xss/lab2&4/lab2.router";
import lab3sql from "./labs/sqlInjectionLabs/lab3,4/lab3.router";
import lab2sql from "./labs/sqlInjectionLabs/lab2/lab2.router";
import lab1UnrestrictedFile from "./labs/unrestrictedFileUpload/lab1/lab1.router";
import lab2UnrestrictedFile from "./labs/unrestrictedFileUpload/lab2/lab2.router";
import lab3UnrestrictedFile from "./labs/unrestrictedFileUpload/lab3/lab3.router";
import lab1IDORSRouter from "./labs/IDORS/lab1/lab1.router";
import lab2IDORSRouter from "./labs/IDORS/lab2/lab2.router";
import lab3IDORSRouter from "./labs/IDORS/lab3/lab3.router";
import userRouter from "./labs/AC-Vuln/Lab1/user.router";
import lab1BrokenAuthRouter from "./labs/brokenAuth/lab1/lab1.router";
import lab2BrokenAuthRouter from "./labs/brokenAuth/lab2/lab2.router";
import lab3BrokenAuthRouter from "./labs/brokenAuth/lab3/lab3.router";
const app = express();
app.use("/uploads", express.static("uploads"));

app.use(cors());
app.use(morgan("dev")); // morgan: HTTP request logger middleware,
// dev: predefined format string that Morgan will use to log requests
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api", registerRouter);
app.use("/api", loginRouter);
app.use("/api", dashboardRouter);
app.use("/api", logoutRouter);
app.use("/api", lab1);
app.use("/api", lab2);
app.use("/api", hiddenData);
app.use("/api", lab2xss);
app.use("/api", lab2sql);
app.use("/api", lab3sql);
app.use("/api", lab1UnrestrictedFile);
app.use("/api", lab2UnrestrictedFile);
app.use("/api", lab3UnrestrictedFile);
app.use("/api", lab1IDORSRouter);
app.use("/api", lab2IDORSRouter);
app.use("/api", lab3IDORSRouter);
app.use("/api", userRouter);
app.use("/api", lab1BrokenAuthRouter);
app.use("/api", lab2BrokenAuthRouter);
app.use("/api", lab3BrokenAuthRouter);

dotenv.config();

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`hello on http://localhost:${PORT}`);
});
