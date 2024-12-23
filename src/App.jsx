import AnnualReport from "./components/AnnualReport";
import Content from "./components/Content";
import DashBoard from "./components/DashBoard";
import Navigation from "./components/Navigation";
import Quote from "./components/Quote";
import Review from "./components/Review";
import Training from "./components/Training";

function App() {
  return (
    <div>
      {/* Section 1 */}
      <Content
        title={"tầm nhìn"}
        textBefore={"Ami&M xây dựng"}
        textGradient={"hệ sinh thái đa ngành phát triển nhanh và bền vững"}
        textAfter={"trên hành trình kiến tạo sự thịnh vượng đích thực!"}
      />
      <div className="relative w-fullS">
        <div className="w-full h-1/4 border-content"></div>
        <Content
          title={"sứ mệnh"}
          textGradient={
            "Mang lại cuộc sống tốt đẹp hơn cho những người đồng hành"
          }
        />
        <AnnualReport />
      </div>

      {/* Section 2 */}
      <Training />
      <DashBoard />

      {/* Section 3 */}
      <Quote />
      <Review />
    </div>
  );
}

export default App;
