import React, { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { MdChatBubbleOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import close from "../../Exports/cancelImg.svg";
import CreateBox from "./CreateBox";
import { createDisc } from "../../redux/Discussion/disSlice";
import store from "../../redux/store";
import { BiCheckCircle, BiErrorCircle } from "react-icons/bi";
import CustomizedSnackbars from "../NotiPopUp";
function CreateNewDis({ handleClick, showMenu }) {
  const dispatch = useDispatch();

  const [allDisc, setAllDisc] = useState([
    {
      description: "",
      set_id: "",
    },
  ]);
  const [showAlert, setShowAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);

  const [setTitle, setSetTitle] = useState(false);

  const handleplusClick = async () => {
    const data = {
      description: "",
      set_id: "",
    };
    setAllDisc([...allDisc, data]);
  };

  const handleDelete = (description) => {
    const items = allDisc.filter((item) => item.description !== description);
    setAllDisc(items);
  };

  useEffect(() => {
    const fetchData = () => {
      {
        showMenu && setAllDisc(allDisc);
      }
    };
    fetchData();
  }, []);

  const handleEdit = (id) => (e) => {
    let newArray = [...allDisc];
    newArray[id].description = e.target.value;
    // newArray[id].set_id = id;

    setAllDisc(newArray);
  };
  const handleCreate = async () => {
    // {
    //   alert(JSON.stringify(allDisc, null, 2));
    // }

    const currentUsername = localStorage.getItem("username");

    const payload = {
      username: `${currentUsername}`,
      discussions: allDisc,
    };

    console.log(payload);
    await dispatch(createDisc(payload));
    const currentStore = store.getState();

    const createdState = currentStore.disc.createState;
    console.log(createdState);
    let reset = [
      {
        description: "",
        set_id: "",
      },
    ];

    if (createdState) {
      setShowAlert(true);
      setAllDisc(reset);
    } else {
      setErrorAlert(true);
    }
  };

  return (
    <div className="createNewDis">
      <div className="closeCont" onClick={handleClick}>
        <img src={close} alt="" />
        <h2>Close</h2>
      </div>
      <div className=" createCont ">
        {allDisc.length > 1 && (
          <input
            type="text"
            className="setTitleBox"
            onChange={(e)=>setSetTitle(e.target.value)}
            placeholder="Input discussion set title"
          />
          )}
          {setTitle}
        <div className="allBoxes" id="allBoxes">
          {allDisc.map((di, index, { length }) => {
            if (index + 1 === length) {
              return (
                <div className="lastBox">
                  <CreateBox
                    id={index}
                    key={index}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                    val={di.description}
                  />
                  <div className="actionsCont flex ">
                    <FiPlus className="addBtn" onClick={handleplusClick} />
                    <button className="creBtn" onClick={handleCreate}>
                      Create
                    </button>
                  </div>
                </div>
              );
            } else {
              return (
                <CreateBox
                  id={index}
                  handleDelete={handleDelete}
                  handleEdit={handleEdit}
                  val={di.description}
                />
              );
            }
          })}
        </div>
        {showAlert && (
          <CustomizedSnackbars
            title="Discussion created Successfully"
            text=""
            severity="success"
            icon={
              <BiCheckCircle
                fontSize="30px"
                color="#04BE00"
                severity="success"
              />
            }
          />
        )}

        {errorAlert && (
          <CustomizedSnackbars
            title="Error Creating Discussion"
            text="Please try again"
            severity="error"
            icon={
              <BiErrorCircle
                fontSize="30px"
                color=" #E84949"
                severity="error"
              />
            }
          />
        )}
      </div>
    </div>
  );
}

export default CreateNewDis;
