import React, { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { MdChatBubbleOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import close from "../../Exports/cancelImg.svg";
import CreateBox from "./CreateBox";
import { createDisc } from "../../redux/Discussion/disSlice";
import store from "../../redux/store";
function CreateNewDis({ handleClick, showMenu }) {
  const dispatch = useDispatch();

  const [allDisc, setAllDisc] = useState([]);
  const [type, setType] = useState("dis");
  const [setTitle, setsetTitle] = useState(false);
  // CREATE DISCUSSION MODAL
  // FIX ANIMATION
  // A++RRAY TO HOLD DISCUSSION
  //data to pass
  //if length is greater than 1 ,change type to set

  const handleplusClick = async () => {
    const data = {
      title: "",
    };
    await dispatch(createDisc(data));
    let top = store.getState().disc.newDiscusssion;
    console.log(top);
    setAllDisc(top);
  };
  const handleDelete = (id) => {
    console.log(id);
  };

  useEffect(() => {
    const fetchData = () => {
      {
        showMenu && setAllDisc(allDisc);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="createNewDis">
      <div className="closeCont" onClick={handleClick}>
        <img src={close} alt="" />
        <h2>Close</h2>
      </div>
      <div className=" createCont ">
        {allDisc.length > 0 && (
          <input
            type="text"
            className="setTitleBox"
            placeholder="Input discussion set title"
          />
        )}
        <div className="allBoxes" id="allBoxes">
          <div className="lastBox">
            <CreateBox id={0} handleDelete={handleDelete} />
            <div
              className={`actionsCont ${
                allDisc.length > 0 ? "hidden" : "flex"
              }`}
            >
              <FiPlus className="addBtn" onClick={handleplusClick} />
              <button className="creBtn">Create</button>
            </div>
          </div>

          {allDisc.map((di, index, { length }) => {
            if (index + 1 === length) {
              return (
                <div className="lastBox">
                  <CreateBox id={index} handleDelete={handleDelete} />
                  <div className="actionsCont flex ">
                    <FiPlus className="addBtn " onClick={handleplusClick} />
                    <button className="creBtn">Create</button>
                  </div>
                </div>
              );
            } else {
              return <CreateBox id={index} handleDelete={handleDelete} />;
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default CreateNewDis;

{
  /* <CreateBox id={2} handleDelete={handleDelete} />
<CreateBox id={3} handleDelete={handleDelete} />
<CreateBox id={4} handleDelete={handleDelete} /> 
 <CreateBox id={5} handleDelete={handleDelete} />

*/
}
