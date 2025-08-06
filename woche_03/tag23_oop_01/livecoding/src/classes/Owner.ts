class Owner {
  public _vorname?: string

  // puplic ist der Standardwert von Eigenschaften und dadurch sind die von außen immer sichtbar

  // Mit private kann die Eigenschaft nur innerhalb der Klasse verwendet werden und ist von außen nicht sichtbar

  private _nachname: string
  _handyNummer: string
  _email?: string

  // # -----  Getter und Setter -----

  // get ist für das Herausholen des Eigenschaftswert zuständig
  // get - Name der Eigenschaft - leere runde Klammer - geschweifte Klammer
  // ? in der runden Klamme rwird immer ein return geschrieben
  // ! Damit macht man sichtbar

  get nachname() {
    return this._nachname
  }

  // set is für das Setzen eines Eigenschaftswert
  // set - Name der Eigenschaft dann einfach leere runde Klammer, wird der zu setzende Wert übergeben, in der geschweiften KLammer wird dann der Wert einer internen Eigenschaft gesetzt
  // in value steh der Wert, der nachdem = beim ZUweisen steht
  // Ich lege auch den eindeutigen Datentyp fest: string
  // ! Damit kann man die Werte ändern

  set nachname(value: string) {
    this._nachname = value
  }

  constructor(nachname: string, handyNummer: string) {
    this._nachname = nachname
    this._handyNummer = handyNummer
  }

  printInfo(): void {
    console.log(`Der Besitzer ist ${this._vorname ?? "Unbekannt"} und seine Handynummer lautet ${this._handyNummer}`)
  }
}

export default Owner
