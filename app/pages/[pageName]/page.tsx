export default async function Page({ params }: { params: { pageName: string  } }) {
    const todo = await fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
    return <h1>hello world page {params.pageName} {todo.title}</h1>
}