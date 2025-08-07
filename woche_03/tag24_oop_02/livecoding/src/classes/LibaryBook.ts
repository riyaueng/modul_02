export class LiberyBook {
  private _id: string = ""
  private _currentOwner: string = ""
  private _title: string = ""
  private _author: string = ""
  private _isBorrowed: boolean = false

  private generateId(): string {
    const myId = `Id:${Math.floor(Math.random() * 100 + 1)}`
    return myId
  }

  constructor(title: string, author: string) {
    // ! Einmaliges setzen von Werten im constructor, Eigenschaften private hat nur ein Getter
    this._id = this.generateId()
    this._title = title
    this._author = author
  }

  public borrowBook(name: string): void {
    if (!this._isBorrowed) {
      this._isBorrowed = true
      this._currentOwner = name
    } else {
      console.error(`The book ${this._title} is already borrowed.`)
    }
  }

  public returnBook(): void {
    if (this._isBorrowed) {
      this._isBorrowed = false
      this._currentOwner = ""
    } else {
      console.log(`The book ${this._title} was not borrowed.`)
    }
  }
}
