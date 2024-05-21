// LIBRARIES
import { UnauthorizedException } from '@nestjs/common';
import { IUserDataJWT } from '@shared/interfaces/decodeJWT.interface';
import { sign } from 'jsonwebtoken';

// CONSTANTS
import constants from '../../constants';

export const generateJWTToken = (
  payload: IUserDataJWT,
  customSecret?: string,
  expiresIn?: string,
): string => {
  // VALIDATE ENV
  if (!constants.JWT_SECRET) {
    throw new UnauthorizedException('JWT CONFIG NOT FOUND');
  }

  // DECODE TOKEN DATA
  const jwtToken = sign(payload, customSecret || constants.JWT_SECRET, {
    expiresIn: expiresIn || '1y',
  });

  if (!jwtToken) {
    throw new UnauthorizedException('UNAUTHORIZED');
  }

  return jwtToken;
};
