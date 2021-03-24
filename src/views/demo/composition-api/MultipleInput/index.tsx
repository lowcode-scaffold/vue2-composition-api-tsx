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
    type: Function as PropType<() => void>,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    default: () => {}
  },
  value: String,
  onChange: {
    type: Function as PropType<(value: string) => void>,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    default: () => {}
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
            props.onChange(value as string);
          }}
          placeholder={props.placeholder}
        ></textarea>
        <div
          v-show={props.allowClear}
          class="clear"
          onClick={() => {
            props.onClear();
          }}
        >
          x
        </div>
      </div>
    );
  }
});

export default tsx.ofType<IProps>().convert(MultipleInput);
