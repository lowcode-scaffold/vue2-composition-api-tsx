import {
  defineComponent,
  ExtractPropTypes,
  PropType
} from "@vue/composition-api";
import * as tsx from "vue-tsx-support";
import "./index.scss";

const props = {
  disabled: {
    type: Boolean,
    default: false
  },
  placeholder: String,
  allowClear: {
    type: Boolean,
    default: false
  },
  onClear: {
    type: Function as PropType<() => void>
  },
  value: String,
  onChange: {
    type: Function as PropType<(value: string) => void>
  }
};

type IProps = ExtractPropTypes<typeof props>;

const MultipleInput = defineComponent({
  props: props,
  setup(props, ctx) {
    return () => (
      <div class="multiple-input">
        <textarea
          disabled={props.disabled}
          value={props.value}
          onChange={(e: any) => {
            const { value } = e.target;
            console.log(props.onChange);
            ctx.emit("change", value);
          }}
          placeholder={props.placeholder}
        ></textarea>
        <div
          v-show={props.allowClear}
          class="clear"
          onClick={() => {
            ctx.emit("clear");
          }}
        >
          x
        </div>
      </div>
    );
  }
});

export default tsx.ofType<IProps>().convert(MultipleInput);
