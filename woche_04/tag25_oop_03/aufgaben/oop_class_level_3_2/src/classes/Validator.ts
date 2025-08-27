import * as EmailValidator from "email-validator"

export class Validator {
  private _email: string = ""

  public get customerEmail(): string {
    return this._email
  }

  constructor(email: string) {
    this._email = email
  }

  static validateEmail(email: string): boolean {
    return EmailValidator.validate(email)
  }
}
