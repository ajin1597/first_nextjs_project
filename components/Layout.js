import NavBar from "./NavBar";

export default function Layout(props) {
  console.log(props);
  return (
    <div id="sunmoon">
      <NavBar />
      {props.children}
    </div>
  );
}
