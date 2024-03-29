import React, { useState, useEffect } from "react";
import "./index.css";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import * as client from "./client";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import { KanbasState } from "../../store";
import { Dropdown } from "react-bootstrap";
function ModuleList() {
  const { courseId } = useParams();
  useEffect(() => {
    client.findModulesForCourse(courseId)
      .then((modules) => {
        dispatch(setModules(modules))
      }
    );
  }, [courseId]);
  
  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };

  const handleDeleteModule = (moduleId: string) => {
    client.deleteModule(moduleId).then((status) => {
      console.log(`deleted ${moduleId}`)
      dispatch(deleteModule(moduleId));
    });
  };

  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };
  const moduleList = useSelector((state: KanbasState) => 
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => 
    state.modulesReducer.module);
  const dispatch = useDispatch();
  const [selectedModule, setSelectedModule] = useState({_id: '1'});
  return (
    <>
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <button className="btn-primary me-2 "
            onClick={handleAddModule}>
            Add
          </button>
          <button className="me-2"
            onClick={handleUpdateModule}>
            Update
          </button>
          <input
            value={module.name}
            className="form-control"
            onChange={(e) =>
              dispatch(setModule({ ...module, name: e.target.value }))
            }/>
          <textarea
            className="form-control"
            value={module.description}
            onChange={(e) =>
              dispatch(setModule({ ...module, description: e.target.value }))
            }/>
        </li>
        {moduleList
          .filter((module) => module.course === courseId)
          .map((module, index) => (
          <li key={index}
            className="list-group-item"
            onClick={() => setSelectedModule(module)}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <FaEllipsisV className="me-2" />
              {module.name}
              <div style={{ marginLeft: "auto", display: "flex", alignItems: "center" }}>
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <Dropdown>
                  <Dropdown.Toggle variant='secondary' id="module-edit-dropdown" style={{ display: "flex", alignItems: "center", height: "22px" }}>
                    <FaEllipsisV className="ms-2" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item
                      onClick={() => dispatch(setModule(module))}>
                      Edit
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => handleDeleteModule(module._id)}>
                      Delete
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
            {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson : any, index : any) => (
                  <li className="list-group-item" key={index}>
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ModuleList;
