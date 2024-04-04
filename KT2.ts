abstract class Publisher {
    title: string
    author: string
    pubYear: number
    copies: number
    constructor(title: string, author: string, pubYear: number, copies: number) {
      this.title = title
      this.author = author
      this.pubYear = pubYear
      this.copies = copies
    }
  
    getTitle(): string {
      return this.title
    }
    setTitle(title: string): void {
      this.title = title
    }
    getAuthor(): string {
      return this.author
    }
    setAuthor(author: string): void {
      this.author = author
    }
    getPubYear(): number {
      return this.pubYear
    }
    setPubYear(pubYear: number): void {
      this.pubYear = pubYear
    }
    getCopies(): number {
      return this.copies
    }
    setCopies(copies: number): void {
      this.copies = copies
    }
  }
  
  interface Reception {
    delivery(item: Publisher): void
    receive(item: Publisher): void
  }
  
  class Magazine extends Publisher implements Reception {
    issue: number
    constructor(title: string, author: string, pubYear: number, copies: number, issue: number) {
      super(title, author, pubYear, copies)
      this.issue = issue
    }
    delivery(item: Publisher): void {}
    receive(item: Publisher): void {}
  }
  
  class Book extends Publisher implements Reception {
    pages: number
    constructor(title: string, author: string, pubYear: number, copies: number, pages: number) {
      super(title, author, pubYear, copies)
      this.pages = pages
    }
    delivery(item: Publisher): void {}
    receive(item: Publisher): void {}
  }
  
  class Reader {
    firstName: string
    lastName: string
    items: Publisher[]
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName
      this.lastName = lastName
      this.items = []
    }
    getFirstName(): string {
      return this.firstName
    }
    setFirstName(firstName: string): void {
      this.firstName = firstName
    }
    getLastName(): string {
      return this.lastName
    }
    setLastName(lastName: string): void {
      this.lastName = lastName
    }
    getItems(): Publisher[] {
      return this.items
    }
    addItem(item: Publisher): void {
      this.items.push(item)
    }
    removeItem(item: Publisher): void {
      const index = this.items.indexOf(item)
      if (index > -1) {
        this.items.splice(index, 1)
      }
    }
  }
  
  class Library {
    items: Publisher[]
    constructor() {
      this.items = []
    }
    addItem(item: Publisher): void {
      this.items.push(item)
    }
    removeItem(item: Publisher): void {
      const index = this.items.indexOf(item)
      if (index > -1) {
        this.items.splice(index, 1)
      }
    }
  }
  
  const library = new Library()
  const book1 = new Book("Book Title 1", "Author 1", 2020, 10, 200)
  const magazine1 = new Magazine("Magazine Title 1", "Author 2", 2021, 5, 1)
  const reader1 = new Reader("John", "Doe")
  
  library.addItem(book1)
  library.addItem(magazine1)
  reader1.addItem(book1)
  reader1.addItem(magazine1)
  
  console.log("Library items:")
  console.log(library.items)
  console.log("Reader items:")
  console.log(reader1.getItems())
  
  reader1.removeItem(book1)
  console.log("After removing book1 from reader1:")
  console.log("Library items:")
  console.log(library.items)
  console.log("Reader items:")
  console.log(reader1.getItems())