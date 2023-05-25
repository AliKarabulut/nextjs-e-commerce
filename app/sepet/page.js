import { getUserCartWithImage } from "../api/getUserCart/route";

const Sepet = async (props) => {
  const sepet = await getUserCartWithImage();
  console.log(sepet);
  return <div>asdasdsa</div>;
};
export default Sepet;
