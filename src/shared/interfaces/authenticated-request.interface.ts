import { IUserDataJWT } from './decodeJWT.interface';

export default interface AuthenticatedRequest extends Request {
  user?: IUserDataJWT;
}
