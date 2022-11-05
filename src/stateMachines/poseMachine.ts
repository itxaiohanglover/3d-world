import { createMachine } from "xstate";
export default createMachine({
  states: {
    "idle": {
      on:{
       KEY_W_DOWN:"walking",
       KEY_A_DOWN:"left",
       KEY_D_DOWN:"right",
       KEY_S_DOWN:"back",
       KEY_SPACE_DOWN:"jump",
       KEY_SHIFT_W_DOWN:"run",
       KEY_NONE_DOWN:'idle',
       KEY_E_DOWN:'sit',
      },entry:'enterIdle'

    }, "run": {
      on:{
        KEY_A_DOWN:"left",
        KEY_D_DOWN:"right",
        KEY_S_DOWN:"back",
        KEY_SPACE_DOWN:"jump",
        KEY_W_UP:"idle",
        KEY_SHIFT_UP:"idle",
        KEY_NONE_DOWN:'idle',
        KEY_E_DOWN:'sit',
      },entry:'enterRun'

    }, "jump": {
      on:{
        JUMP_OVER:'idle',
      },entry:'enterJump'

    }, "left": {
      on:{
        KEY_W_DOWN:"walking",
        KEY_D_DOWN:"right",
        KEY_S_DOWN:"back",
        KEY_SPACE_DOWN:"jump",
        KEY_NONE_DOWN:'idle',
        KEY_A_UP:"idle",
        KEY_E_DOWN:'sit',
      },entry:'enterLeft'

    }, "right": {
      on:{
        KEY_W_DOWN:"walking",
        KEY_A_DOWN:"left",
        KEY_S_DOWN:"back",
        KEY_SPACE_DOWN:"jump",
        KEY_SHIFT_W_DOWN:"run",
        KEY_NONE_DOWN:'idle',
        KEY_D_UP:"idle",
        KEY_E_DOWN:'sit',
      },entry:'enterRight'

    }, "walking": {
      on:{
        KEY_W_UP:"idle",
        KEY_A_DOWN:"left",
        KEY_D_DOWN:"right",
        KEY_S_DOWN:"back",
        KEY_SPACE_DOWN:"jump",
        KEY_SHIFT_DOWN:"run",
        KEY_NONE_DOWN:'idle',
        KEY_E_DOWN:'sit'
      },entry:'enterWalking'

    }, "back": {
      on:{
        KEY_W_DOWN:"walking",
        KEY_A_DOWN:"left",
        KEY_D_DOWN:"right",
        KEY_S_UP:"idle",
        KEY_SPACE_DOWN:"jump",
        KEY_SHIFT_W_DOWN:"run",
        KEY_NONE_DOWN:'idle',
        KEY_E_DOWN:'sit'
      },entry:'enterBack'

    },'sit':{
      on:{
        KEY_W_DOWN:"walking",
        KEY_A_DOWN:"left",
        KEY_D_DOWN:"right",
        KEY_S_DOWN:"back",
        KEY_SPACE_DOWN:"jump",
        KEY_SHIFT_W_DOWN:"run",
      }
    }
  },
  initial:'idle'
})