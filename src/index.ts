class User  {
  private _courseCount = 0
  constructor (
    public name: string,
    public email: string,
    private userID: string
  ) {}
  get getGoogleEmail(): string {
    return `google${this.email}`
  }
  get courseCount(): number {
    return this.courseCount
  }
  set courseCount(courseNum) {
    if (courseNum <= 1) {
      throw new Error("Course count should be more than 1")
    }
    this._courseCount = courseNum
  }
}
const samuel = new User("Samuel", "abc@mail.com", "83920")