import React, { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { MdChatBubbleOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import close from "../../Exports/cancelImg.svg";
import CreateBox from "./CreateBox";
import { createDisc } from "../../redux/Discussion/disSlice";
import store from "../../redux/store";
import { BiCheckCircle, BiErrorCircle } from "react-icons/bi";
import { CgSpinner } from "react-icons/cg";
import CustomizedSnackbars from "../NotiPopUp";
function CreateNewDis({ handleClick, showMenu }) {
  const dispatch = useDispatch();
  const [showAlert, setShowAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
  const [active, setActive] = useState(false);

  const [setTitle, setSetTitle] = useState("");
  const [loading, setLoading] = useState("");
  const [allDisc, setAllDisc] = useState([
    {
      description: "",
      setDescription: `${setTitle}`,
    },
  ]);

  const handleplusClick = () => {
    const data = {
      description: "",
      setDescription: `${setTitle}`,
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
    setActive(true);

    setAllDisc(newArray);
  };
  const handleCreate = async () => {
    setLoading(true);
    const currentUsername = localStorage.getItem("username");

    const payload = {
      username: `${currentUsername}`,
      discussions: allDisc,
    };

    console.log(payload);
    await dispatch(createDisc(payload));
    setLoading(false);
    const currentStore = store.getState();

    const createdState = currentStore.disc.createState;
    console.log(createdState);
    let reset = [
      {
        description: "",
        setDescription: `${setTitle}`,
      },
    ];

    if (createdState) {
      setShowAlert(true);
      setAllDisc(reset);
      handleClick();
      window.location.reload();
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
        {setTitle}
        {allDisc.length > 1 && (
          <input
            type="text"
            className="setTitleBox"
            onChange={(e) => setSetTitle(e.target.value)}
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
                  <div className="actionsCont flex">
                    <FiPlus
                      className={`addBtn ${
                        active ? "bg-primary" : "bg-dashBtn"
                      }  ${active ? "text-white" : "text-desc"}`}
                      onClick={handleplusClick}
                    />
                    <button
                      className={`creBtn font-bold ${
                        active ? "bg-primary" : "bg-dashBtn"
                      }  ${active ? "text-white" : "text-desc"}`}
                      onClick={handleCreate}
                    >
                      {loading ? (
                        <span className=" flex justify-center items-center">
                          <CgSpinner className=" w-full animate-spin    mr-1" />
                          Creating
                        </span>
                      ) : (
                        "Create"
                      )}
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
