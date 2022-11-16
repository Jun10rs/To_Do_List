import { useEffect } from "react";
import { useState } from "react";
import { BsPlusCircleFill } from "react-icons/bs";

import Filter from "../../components/Filter";
import ListItem from "../../components/ListItem";
import TextField from "../../components/TextField";

import * as S from "./styles";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const [filter, setFilter] = useState("all");
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("items")) || []
  );

  console.log(filter);

  const handleAddItem = () => {
    if (inputValue) {
      const newItem = {
        id: items[items.length - 1]?.id + 1 || 1,
        description: inputValue,
        checked: false,
      };
      setItems([...items, newItem]);
      setInputValue("");
      localStorage.setItem("items", JSON.stringify([...items, newItem]));
    }
  };

  const handleDeleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
    localStorage.setItem("items", JSON.stringify(newItems));
  };

  const handleCheckItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });
    setItems(newItems);
    localStorage.setItem("items", JSON.stringify(newItems));
  };

  const handleEditItem = (id, description) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, description };
      }
      return item;
    });
    setItems(newItems);
    localStorage.setItem("items", JSON.stringify(newItems));
  };

  const handleFilter = (filter) => {
    switch (filter) {
      case "all":
        setFilteredList(items);
        break;
      case "done":
        setFilteredList(items.filter((item) => item.checked));
        break;
      case "todo":
        setFilteredList(items.filter((item) => !item.checked));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    handleFilter(filter);
  }, [items, filter]);

  return (
    <S.Wrapper>
      <S.Container>
        <S.Header>
          <S.Title>
            <h1>CLINICORP'S LIST</h1>
          </S.Title>
          <S.FilterContainer>
            <Filter
              description="Todas"
              value={items.length}
              handleFilter={() => setFilter("all")}
              active={filter === "all"}
            />
            <Filter
              description="Concluídas"
              value={items.filter((item) => item.checked).length}
              handleFilter={() => setFilter("done")}
              active={filter === "done"}
            />
            <Filter
              description="Para fazer"
              value={items.filter((item) => !item.checked).length}
              handleFilter={() => setFilter("todo")}
              active={filter === "todo"}
            />
          </S.FilterContainer>
        </S.Header>
        <S.Form
          onSubmit={(e) => {
            e.preventDefault();
            handleAddItem();
          }}
        >
          <TextField
            placeholder="Digite..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <S.SubmitButton type="submit">
            <BsPlusCircleFill />
          </S.SubmitButton>
        </S.Form>
        <S.Content>
          <S.List>
            {filteredList.map((item) => (
              <ListItem
                key={item.id}
                checked={item.checked}
                description={item.description}
                handleDeleteItem={() => handleDeleteItem(item.id)}
                handleCheckItem={() => handleCheckItem(item.id)}
                handleEditItem={(description) =>
                handleEditItem(item.id, description)
                }
              />
            ))}
          </S.List>
        </S.Content>
      </S.Container>
    </S.Wrapper>
  );
};

export default Home;
