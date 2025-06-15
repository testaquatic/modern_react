import React from "react";

type Form = {
    name: string;
    address: {
        do: string;
        city: string;
    }
};



export function StateNestImmer2() {
    const [form, setForm] = React.useState({
        name: "홍길동",
        address: {
            do: "충청북도",
            city: "청주시",
        }
    });

    const handleNest = (e: React.ChangeEvent<HTMLInputElement>) => {
        
    }
}