abstract class Publisher {
    title: string
    author: string
    pubYear: number
    copies: number
    static count: number = 0
    constructor(title: string, author: string, pubYear: number, copies: number) {
      this.title = title
      this.author = author
      this.pubYear = pubYear
      this.copies = copies
      Publisher.count ++
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
    static items: Publisher[]
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName
      this.lastName = lastName
      Reader.items = []
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
      return Reader.items
    }
    delivery(item: Publisher): void {
        if(item.copies == 0 || item.copies  == Reader.items.length) return
        item.copies = item.copies - 1
    }
    recieve(item: Publisher): void {
        item.copies = item.copies + 1
    }
  }
  

  class Library {
    private items: Publisher[]

    constructor() {
        this.items = []
    }
    addPublication(publication: string): void {
        this.items.push(publication)
    }
    removePublication(): string | undefined {
        return this.items.pop()
    }
    getAllPublications(): string[] {
        return this.items
    }
    delivery(item: Publisher): void {
        if(item.copies == 0 || item.copies  == Reader.items.length) return
        item.copies = item.copies - 1
    }
    recieve(item: Publisher): void {
        item.copies = item.copies + 1
    }
}
  
  const library = new Library()
  const book1 = new Book("Book Title 1", "Author 1", 2020, 10, 200)
  const magazine1 = new Magazine("Magazine Title 1", "Author 2", 2021, 5, 1)
  const reader1 = new Reader("John", "Doe")
  
  library.delivery(book1)
  library.delivery(magazine1)
  reader1.delivery(book1)
  reader1.delivery(magazine1)
  
  console.log("Library items:")
  console.log(library.items)
  console.log("Reader items:")
  console.log(reader1.getItems())
  
  reader1.recieve(book1)
  console.log("After removing book1 from reader1:")
  console.log("Library items:")
  console.log(library.items)
  console.log("Reader items:")
  console.log(reader1.getItems())
