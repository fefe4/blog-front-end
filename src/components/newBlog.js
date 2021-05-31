const NewBlog = () => {
    return(
        <main>
            <form action="http://localhost:4000/api/blogs" method="POST">
                <label for="title">Title</label>
                <input name="title" type="text" />
                <label for="description">Description</label>
                <input name="descriptioN" type="text" />
                <label for="body">Body</label>
                <input name="body" type="text" />
                <button>Submit</button>
            </form>
        </main>
    )
}