import { v4 as uuidv4 } from "uuid";

type Tasks = {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
};

const list = document.querySelector<HTMLUListElement>("#list");
const form = document.getElementById("list-form") as HTMLFormElement;
const text = document.querySelector<HTMLInputElement>("#list-text");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (text?.value == "" || text?.value == null) return;

  const task: Tasks = {
    id: uuidv4(),
    title: text.value,
    completed: false,
    createdAt: new Date(),
  };

  addListItems(task);
  text.value = "";
});

function addListItems(task: Tasks) {
  const item = document.createElement("li");
  const label = document.createElement("label");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  label.append(checkbox, task.title);
  item.append(label);
  list?.append(item);
}

document.querySelector<HTMLButtonElement>('.btn')!.innerHTML = "AddToList";