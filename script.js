// Book data management

let books = [];

function Book(title, content)
{
    this.title = title;
    this.content = content;
}

function addBook(title, content)
{
    title = title.trim();

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

// Book ui management

let bookContainer = document.querySelector("main");

function addBookElement(title, summary)
{
    let book = document.createElement("div");
    book.classList.add("book");
    book.setAttribute("bookTitle", title);

    book.innerHTML = `
    <div class="cover">
        <h2></h2>
    </div>
    <div class="back">
        <p></p>
        <div class="book-actions">
            <button><img src="images/view.svg" alt="View"></button>
            <button><img src="images/delete.svg" alt="Remove"></button>
        </div>
    </div>
    <div class="spine"></div>
    `

    book.querySelector(".cover > h2").textContent = title;

    book.querySelector("button:has(img[alt='Remove'])").addEventListener("click", ()=>{
        removeBook(title);
    });

    let back = book.querySelector(".back > p");
    let lines = summary.split("\n");
    let i = 0;
    for (; i < lines.length; i++)
    {
        if (lines[i].trim() != '')
        {
            break;
        }
    }
    for (; i < lines.length; i++) {
        back.appendChild(document.createTextNode(lines[i]));
        back.appendChild(document.createElement("br"));
    }

    bookContainer.prepend(book);
}

function removeBookElement(title)
{
    let book = document.querySelector(`.book[bookTitle="${title}"]`);
    bookContainer.removeChild(book);
}

// Register books

addBook(
    "A sea apart", 
    `
    Anna was shocked when her twin sister, Lucia, who she thought was always inseparable with, suddenly left her to study abroad.
    Follow Anna on a journey of discovery and growth, as she unravel why her sister left without a word, and about herself...
    `
);

addBook(
    "Adventure of a Jhonny", 
    `
    Jhonny's back again! Now with another adventure with you guessed it- Rick and Mike! 
    What will Jhonny's beer tainted doings bring us this time? What is Goddachup boy plotting?
    Find out in today's dose of Jhonny comedy!
    `
);

addBook(
    "Anywhere but here",
    `
    "Please... Anywhere but here..." the little boy said to the fairy, he's bored of his home, his life, his bedroom, dark rings are clearly visible under his eyes.
    The fairy looked at him silently for a moment, sitting on the balustade... She then smiled understandingly, and held out her hand, those hands that guided him through a dream-like world...
    `
);

addBook(
    "Morguean'fitness",
    `
    If you aren't fit, you'll end up in the morgue sooner! Any 5 year ol' can tell you that! So pick this book up, the sooner the better, and learn and follow and keep on trainin'!
    `
);

addBook(
    "Life in ancient Egypt",
    `
    History of the civilization of ancient Egypt, a lively description of the occupation, food, trade, locations of interest, and beliefs of our ancestors along the Nile!
    `
);

addBook(
    "Grimm's fairytales",
    `
    A complete collection of the original Grim(m's) fairytales, with much violence, vengeance and justice!
    `
);

addBook(
    "The jester who farts songs",
    `
    There was once, a court jester, who farted songs from his behind. The jester had some real mad skills, and this story has some real weird truths, open this book to find out who, and where this old fart stunk the court!
    `
);

// Ui bindings

let addBookForm = document.querySelector("#add-book-form");
let bookTitleField = addBookForm.querySelector("#title");
let bookSummaryField = addBookForm.querySelector("#summary");

let addBookButton = document.querySelector("#add-book");
let cancelAddBookButton = document.querySelector("#cancel-add-book");

addBookButton.addEventListener("click", (event)=>{
    bookTitleField.value = "";
    bookSummaryField.value = "";

    addBookForm.classList.remove("hidden");
});

cancelAddBookButton.addEventListener("click", (event)=>{
    addBookForm.classList.add("hidden");
});

addBookForm.addEventListener("submit", (event)=>{
    event.preventDefault();

    addBook(
        bookTitleField.value, 
        bookSummaryField.value
    );

    addBookForm.classList.add("hidden");
})