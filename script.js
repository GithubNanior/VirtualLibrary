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

    let back = book.querySelector(".back");
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

    bookContainer.appendChild(book);
}

function removeBookElement(title)
{
    let book = document.querySelector(`.book[bookTitle="${title}"]`);
    bookContainer.removeChild(book);
}

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