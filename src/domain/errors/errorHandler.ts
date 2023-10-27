import { NextFunction, Response, Request,  } from "express";

export const errorHandler = (
    error: Error,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    console.log(error);

    if (error instanceof Error) {
      return res.status(400).json({ message: error.message });
    };
  
    return res.status(500).json({ message: "Internal server error" });
  };