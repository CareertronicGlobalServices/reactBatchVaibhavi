import Button from "./Button";

function Navbar() {
  return (
    <>
      <div className="flex justify-between border-2 border-amber-950">
        <div className="p-2">Logo</div>
        <div className="flex gap-4 p-2">
          <a>About</a>

          <a>Careers</a>

          <a>Contact</a>

          <a>Courses</a>
        </div>
        <Button />
      </div>
    </>
  );
}

export default Navbar;
