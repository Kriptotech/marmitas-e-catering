import { useState } from "react";
import style from "./styles.module.css";

export function Form() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [numberOfPeople, setNumberOfPeople] = useState("");
    const [date, setDate] = useState("");
    const [typeOfEvent, setTypeOfEvent] = useState("Cafê da manhã");
    const [description, setDescription] = useState("");

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
    }

    return (
        <div className={style.container}>
            <form onSubmit={(event) => handleSubmit(event)}>
                <h2>AGORA, O SEU EVENTO:</h2>
                <span>TEL. 218 115 020</span>

                <input
                    type="text"
                    placeholder="Seu Nome / Nome da Organização"
                    value={name}
                    required
                    onChange={(event) => setName(event.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    required
                    onChange={(event) => setEmail(event.target.value)}
                />
                <input
                    type="number"
                    placeholder="Telefone"
                    value={phone}
                    required
                    onChange={(event) => setPhone(event.target.value)}
                />
                <input
                    type="number"
                    placeholder="Numero de Pessoas"
                    value={numberOfPeople}
                    required
                    onChange={(event) => setNumberOfPeople(event.target.value)}
                />
                <input
                    type="date"
                    placeholder="Data do Evento"
                    value={date}
                    required
                    onChange={(event) => setDate(event.target.value)}
                />
                <select
                    placeholder="Tipo de Eevento"
                    value={typeOfEvent}
                    required
                    onChange={(event) => setTypeOfEvent(event.target.value)}
                >
                    <span>kk</span>
                    <optgroup>
                        <option value="Cafê da manhã">Cafê da manhã</option>
                        <option value="Lanche">Lanche</option>
                        <option value="Almoço">Almoço</option>
                        <option value="Jantar">Jantar</option>
                        <option value="Coquetel">Coquetel</option>
                    </optgroup>
                    <optgroup>
                        <option value="Chá de Bebê">Chá de Bebê</option>
                        <option value="Batizado">Batizado</option>
                        <option value="Aniversario">Aniversario</option>
                        <option value="Graduação">Graduação</option>
                        <option value="Coquetel">Coquetel</option>
                    </optgroup>

                    <optgroup>
                        <option value="Outro">Outro</option>
                    </optgroup>
                </select>

                <textarea
                    value={description}
                    required
                    onChange={(event) => setDescription(event.target.value)}
                    placeholder="Comentarios ou Informações Adicionais"
                ></textarea>

                <button>PEDIR ORÇAMENTO</button>
            </form>
        </div>
    );
}
