import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

export default function Home() {
  const validationSchema = Yup.object().shape({
    nome: Yup.string().required("Nome é obrigatório"),
    sobrenome: Yup.string().required("Sobrenome é obrigatório"),
    email: Yup.string().email().required("Email é obrigatório"),
    dataNascimento: Yup.string()
    .required("Data de nascimento é obrigatória")
    .matches(
      /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,
      "Data de nascimento deve ser no formato YYYY-MM-DD"
      ),
    nacionalidade: Yup.string().required("Nacionalidade é obrigatório"),
    est_civil: Yup.string().required("Estado Civil é obrigatório"),
    senha: Yup.string().required("Senha é obrigatório"),
    confirma_senha: Yup.string().oneOf([Yup.ref("senha"), null], "As senhas devem ser a mesma")
  });

  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  async function onSubmit(data) {
    return false;
  }

  return (
    <>
      <div className="card m-3">
        <h5 className="card-header">
          Cadastro de usuário
        </h5>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-row">
              <div className="form-group col">
                <label>Nome</label>
                <input
                  name="nome"
                  type="text"
                  {...register("nome")}
                  className={`form-control ${
                    errors.nome ? "is-invalid" : ""
                  }`}
                />
                <div className="invalid-feedback">
                  {errors.nome?.message}
                </div>
              </div>
              <div className="form-group col">
                <label>Sobrenome</label>
                <input
                  name="sobrenome"
                  type="text"
                  {...register("sobrenome")}
                  className={`form-control ${
                    errors.sobrenome ? "is-invalid" : ""
                  }`}
                />
                <div className="invalid-feedback">
                  {errors.sobrenome?.message}
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col">
                <label>Email</label>
                <input
                  name="email"
                  type="email"
                  {...register("email")}
                  className={`form-control ${
                    errors.email ? "is-invalid" : ""
                  }`}
                />
                <div className="invalid-feedback">
                  {errors.email?.message}
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col">
                <label>Data de nascimento</label>
                <input
                  name="dataNascimento"
                  type="date"
                  {...register("dataNascimento")}
                  className={`form-control ${
                    errors.dataNascimento ? "is-invalid" : ""
                  }`}
                />
                <div className="invalid-feedback">
                  {errors.dataNascimento?.message}
                </div>
              </div>
            </div>
            <div className="form row">
              <div className="form-group col">
                <label>Nacionalidade</label>
                <select
                  name="nacionalidade"
                  {...register("nacionalidade")}
                  className={`form-control ${errors.nacionalidade ? "is-invalid" : ""}`}
                >
                  <option value="" hidden>
                    Selecione sua nacionalidade
                  </option>
                </select>
                <div className="invalid-feedback">{errors.nacionalidade?.message}</div>
              </div>
            </div>
            <div className="form row">
              <div className="form-group col">
                <label>Senha</label>
                <input
                  name="senha"
                  type="password"
                  {...register("senha")}
                  className={`form-control ${
                    errors.senha ? "is-invalid" : ""
                  }`}
                />
                <div className="invalid-feedback">{errors.senha?.message}</div>
              </div>
              <div className="form-group col">
                <label>Confirme sua senha</label>
                <input
                  name="confirma_senha"
                  type="password"
                  {...register("confirma_senha")}
                  className={`form-control ${
                    errors.confirma_senha ? "is-invalid" : ""
                  }`}
                />
                <div className="invalid-feedback">{errors.confirma_senha?.message}</div>
              </div>
            </div>
            <div className="form-group form-check">
              <div className="invalid-feedback">
                {errors.acceptTerms?.message}
              </div>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary mr-1">
                Cadastrar
              </button>
              <button
                type="reset"
                onClick={() => reset()}
                className="btn btn-secondary"
              >
                Limpar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}