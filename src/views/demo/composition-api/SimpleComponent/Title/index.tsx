import { defineComponent, PropType, ref } from '@vue/composition-api';

export default defineComponent({
  props: {
    title: {
      type: String as PropType<string>,
      required: true
    },
    click: {
      type: Function as PropType<() => void>
    }
  },
  methods: {
    getCount() {
      return this.count;
    },
    setCount() {
      this.count++;
    }
  },
  setup(props) {
    const count = ref(8);
    return {
      count
    };
    //   return () => <div>{props.title}</div>;
  },
  render() {
    return (
      <div
        onClick={() => {
          this.$emit('click');
          this.setCount();
        }}
      >
        {this.title}，count:{this.getCount()}
      </div>
    );
  }
});
