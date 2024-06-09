import { databases } from "@/appwrite";

export const getTodosGroupedByColumn = async () => {
  const databaseId = process.env.NEXT_PUBLIC_DATABASE_ID;
  const collectionId = process.env.NEXT_PUBLIC_TOOLS_COLLECTION_ID;

  const data = await databases.listDocuments(databaseId!, collectionId!);

  const todos = data.documents;

  // console.log(data);

  const columns = todos.reduce((acc, todo) => {
    if (!acc.get(todo.status)) {
      acc.set(todo.status, {
        id: todo.status,
        todos: [],
      });
    }

    acc.get(todo.status)!.todos.push({
      $id: todo.$id,
      $createdAt: todo.$createdAt,
      title: todo.title,
      status: todo.status,
      ...(todo.image && { image: JSON.parse(todo.image) }),
    });
    return acc;
  }, new Map<TypedColumn, Column>());

  console.log("getTodosGroupedByColumn called", columns);
};
