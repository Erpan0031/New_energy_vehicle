import { NextFunction } from 'express';

const GlobalMiddleware = (req: Request, res: Response, next: NextFunction) => {
  return next();
};
export default GlobalMiddleware;
