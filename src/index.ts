class User  {
  constructor (
    public name: string,
    public email: string,
    private userID: string
  ) {}
}
const samuel = new User("Samuel", "abc@mail.com", "83920")
console.log(samuel.name)