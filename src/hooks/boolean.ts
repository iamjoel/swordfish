import { ref } from 'vue';

export default function useBoolean(initValue = false) : any{
  const state = ref(initValue);
  const setState = (value: boolean) => {
    state.value = value;
  };

  const setTrue = () => {
    setState(true);
  };

  const setFalse = () => {
    setState(false);
  };

  const toggle = () => {
    state.value = !state.value;
  };
  return [state, {toggle, setTrue, setFalse, setState}];
}
