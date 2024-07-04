import React, { createContext, useReducer, useContext, useEffect, useState } from 'react';
import { fetchCharacterData, fetchGameData } from "../util/http";


const initialState = {
    name: '',
    age: 0,
    gender: '',
    health: 20,
    happiness: 10,
    strength: 10,
    intelligence: 10,
    charisma: 10,
    dating: '',
    friends: [],
    money: 300,
    skills: [],
    fullTimeJobs: '',
    partTimeJobs: [],
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'INITIALIZE':
            return { ...action.data };
        case 'INCREMENT':
            return { ...state, [action.stat]: state[action.stat] + action.value };
        case 'DECREMENT':
            return { ...state, [action.stat]: state[action.stat] - action.value };
        case 'ADD_FRIEND':
            return { ...state, friends: [...state.friends, action.friend] };
        case 'REMOVE_FRIEND':
            return { ...state, friends: state.friends.filter((friend) => friend !== action.friend) };
        case 'ADD_DATE':
            return { ...state, dating: action.friend };
        case 'REMOVE_DATE':
            return { ...state, dating: '' };
        case 'SET_NAME':
            return { ...state, name: action.name };
        case 'SET_AGE':
            return { ...state, age: state.age + 1 };
        case 'SET_GENDER':
            return { ...state, gender: action.gender };
        case 'ADD_SKILL':
            return { ...state, skills: [...state.skills, action.skill] };
        case 'ADD_FULLTIME':
            return { ...state, fullTimeJobs: action.job };
        case 'REMOVE_FULLTIME':
            return { ...state, fullTimeJobs: ''};
        case 'ADD_PARTTIME':
            return { ...state, partTimeJobs: [...state.partTimeJobs, action.job] };
        case 'REMOVE_PARTTIME':
            return { ...state, partTimeJobs: state.partTimeJobs.filter((job) => job !== action.job) };
        default:
            return state;
    }
};

const StatsContext = createContext();

export const useStats = () => useContext(StatsContext);

export const StatsProvider = ({ children }) => {
    const [data, setData] = useState(initialState);
    const [state, dispatch] = useReducer(reducer, data);
    useEffect(() => {
        if (data) {
            dispatch({ type: 'INITIALIZE', data });
        }
    }, [data]);
    console.log("State", state)
    const incrementStat = (stat, value) => {
        dispatch({ type: 'INCREMENT', stat, value });
    };

    const decrementStat = (stat, value) => {
        dispatch({ type: 'DECREMENT', stat, value });
    };

    const addFriend = (friend) => {
        dispatch({ type: 'ADD_FRIEND', friend });
    }

    const removeFriend = (friend) => {
        dispatch({ type: 'REMOVE_FRIEND', friend });
    }
    const addDate = (friend) => {
        dispatch({ type: 'ADD_DATE', friend });
    }
    const removeDate = () => {
        dispatch({ type: 'REMOVE_DATE' });
    }
    const setName = (name) => {
        dispatch({ type: 'SET_NAME', name });
    }
    const setGender = (gender) => {
        dispatch({ type: 'SET_GENDER', gender });
    }
    const setAge = (age) => {
        dispatch({ type: 'SET_AGE', age });
    }
    const addSkill = (skill) => {
        dispatch({ type: 'ADD_SKILL', skill })
    }
    const addFullTimeJobs = (job) => {
        dispatch({ type: 'ADD_FULLTIME', job })
    }
    const removeFullTimeJobs = (job) => {
        dispatch({ type: 'REMOVE_FULLTIME', job })
    }
    const addPartTimeJobs = (job) => {
        dispatch({ type: 'ADD_PARTTIME', job })
    }
    const removePartTimeJobs = (job) => {
        dispatch({ type: 'REMOVE_PARTTIME', job })
    }
    return (
        <StatsContext.Provider value={{
            state, incrementStat, decrementStat,
            addFriend, removeFriend, addDate, removeDate,
            setName, setGender, setAge, data, setData,addSkill,
            addFullTimeJobs, removeFullTimeJobs, addPartTimeJobs, removePartTimeJobs
        }}>
            {children}
        </StatsContext.Provider>
    );
};
