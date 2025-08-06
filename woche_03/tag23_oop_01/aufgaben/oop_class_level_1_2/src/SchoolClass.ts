export class SchoolClass {
  _id: number
  _name: string
  _endDate?: string

  constructor(id: number, name: string, endDate?: string | undefined) {
    this._id = id
    this._name = name
  }

  createSchoolClass() {
    console.log(`${SchoolClass} creation successful!`)
  }

  setEndDate(endDate?: string) {
    this._endDate = endDate
  }

  changeName(name: string) {
    this._name = name
  }
}
