import Navbar from "./Navbar";

type Props = {};

function AddForm({}: Props) {
  return (
    <>
      <Navbar />
      <form action="">
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </form>
    </>
  );
}

export default AddForm;
