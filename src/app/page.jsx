import Header from "./components/Header";

async function Home() {
  return (
    <div className="flex flex-col items-center">
      <Header />

      <main>
        {/* <div>
          {data.map((article, index) => (
            <div className="flex gap-4 ">
              <div className="border-[1px] border-slate-500">
                <div className="p-3 " key={index}>
                  {article.tag_list[0]}
                </div>
                <div className="p-3" key={index}>
                  {article.title}
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </main>
    </div>
  );
}
export default Home;
