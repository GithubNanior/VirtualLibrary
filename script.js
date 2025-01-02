let books = [];

function Book(title, content)
{
    this.title = title;
    this.content = content;
}

function addBook(title, content)
{
    if (findBook(title) != -1) 
    {
        return `Title "${title}" is already taken.`;
    }
    else
    {
        books.push(new Book(title, content));

        addBookElement(title, content);
    }
}

function removeBook(title)
{
    let index = findBook(title);
    if (index == -1)
    {
        return `No book named "${title} found.`;
    }
    else
    {
        books.splice(index, 1);
        removeBookElement(title);
    }
}

function findBook(title)
{
    return books.findIndex((book)=>book.title == title);
}

let bookContainer = document.querySelector("main");

function addBookElement(title, summary)
{
    let book = document.createElement("div");
    book.classList.add("book");
    book.setAttribute("bookTitle", title);

    book.innerHTML = `
    <div class="cover"><h2></h2></div>
    <div class="back"></div>
    <div class="ridge"></div>
    `

    book.querySelector(".cover > h2").textContent = title;
    book.querySelector(".back").textContent = summary;

    bookContainer.appendChild(book);
}

function removeBookElement(title)
{
    let book = document.querySelector(`.book[bookTitle="${title}"]`);
    bookContainer.removeChild(book);
}
