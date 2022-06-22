import React, { useState } from "react";
import { useFormik } from "formik";
import { FormUsuario, CreateUserResponse } from "../Interface/FormUsuario";
import { FormAPI } from "../API/conexionFom";
import "../App.css";

const initialValues: FormUsuario = {
  name: "",
  apellido: "",
  ciudad: "",
  carrera: ""
};

export const Formulario = () => {
  const [idGenerado, setidGenerado] = useState("");

  const formik = useFormik({
    initialValues,
    onSubmit: async (values: FormUsuario) => {
      try {
        const respuesta = await FormAPI.post<CreateUserResponse>(
          "users",
          values
        );
        setidGenerado(respuesta.data.id);
      } catch (err) {
        alert(err);
      }
    },
  });

  return (
    <div className="Formulario">
      <h3 style={{ textAlign: "center" }}>Formulario</h3>
      <form
        onSubmit={formik.handleSubmit}
        className="col-10 col-lg-6 offset-1 offset-lg-3"
      >
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </div>

        <div className="form-group">
          <label htmlFor="apellido">Apellido</label>
          <input
            type="text"
            className="form-control"
            id="apellido"
            onChange={formik.handleChange}
            value={formik.values.apellido}
          />
        </div>

        <div className="form-group">
          <label htmlFor="carrera">Carrera</label>
          <input
            type="text"
            className="form-control"
            id="carrera"
            onChange={formik.handleChange}
            value={formik.values.carrera}
          />
        </div>

        <div className="form-group">
          <label htmlFor="ciudad">Ciudad</label>
          <input
            type="text"
            className="form-control"
            id="ciudad"
            onChange={formik.handleChange}
            value={formik.values.ciudad}
          />
        </div>
        <br />

        <button type="submit" className="btn btn-primary col-12 col-lg-12">
          Guardar
        </button>
      </form>

      {idGenerado != "" ? (
        <div
          className="alert alert-primary alert-dismissible fade show"
          role="alert"
        >
          Se ha agregado exitosamente con el {idGenerado}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
