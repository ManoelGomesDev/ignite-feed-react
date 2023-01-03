import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from "./App.module.css";

import "./global.css";


function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Diego Fernandes"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, labore ratione aliquid cum asperiores enim ducimus tempora reprehenderit ea magnam ex laboriosam, unde veniam rerum, sed dolor minus eum nostrum."
          />
          <Post
            author="Manoel Lucio"
            content="this year i turn developer fullstack"
          />
        </main>
      </div>
    </>
  );
}

export default App;
