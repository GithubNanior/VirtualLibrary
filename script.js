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
    }
}

function findBook(title)
{
    return books.findIndex((book)=>book.title == title);
}