import { defineComponent, reactive } from "@vue/composition-api";
import Title from "./Title";
import MultipleInput from "../MultipleInput";

export default defineComponent({
  setup: () => {
    const count = reactive<{ data: { value: number } }>({ data: { value: 0 } });
    return () => (
      <div>
        <Title
          title="title"
          onClick={() => {
            alert("click");
          }}
        />
        {count.data.value}
        <button
          onClick={() => {
            count.data.value++;
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            count.data.value--;
          }}
        >
          -
        </button>
        <MultipleInput
          onChange={value => {
            console.log(value, 222222222);
          }}
          value={"11111111111"}
          disabled={false}
          onClear={() => {
            console.log("clear");
          }}
          allowClear={true}
        />
      </div>
    );
  }
  //   render() {
  //     return (
  //       <div>
  //         {this.count.data.value}
  //         <button
  //           onClick={() => {
  //             this.count.data.value++;
  //           }}
  //         >
  //           +
  //         </button>
  //         <button
  //           onClick={() => {
  //             this.count.data.value--;
  //           }}
  //         >
  //           -
  //         </button>
  //       </div>
  //     );
  //   }
});
