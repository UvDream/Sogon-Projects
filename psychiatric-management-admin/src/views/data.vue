<script>
export default {
  data() {
    return {
      User: {
        category: "User",
        shape: "RoundedRectangle",
        shapeOptions: {
          fill: "bluegrad",
          portId: "",
          cursor: "pointer",
          fromEndSegmentLength: 40
        }
      },
      Supplier: {
        category: "Supplier",
        shape: "RoundedRectangle",
        shapeOptions: {
          fill: "greengrad",
          portId: "",
          toEndSegmentLength: 40
        }
      },
      myjson: {
        copiesArrays: true,
        copiesArrayObjects: true,
        nodeDataArray: [
          { key: -1, category: "greengrad", text: "新建" },
          { key: -2, category: "Supplier", text: "发现" },
          { key: -3, category: "User", text: "评定" },
          { key: -4, category: "User", text: "治疗" },
          { key: -5, category: "User", text: "四帮一" },
          { key: -6, category: "User", text: "康复" },
          { key: -7, category: "User", text: "办结" }
        ],
        linkDataArray: [
          { from: -1, to: -2, text: "呵呵呵呵呵呵", curviness: 20 },
          { from: -2, to: -3 },
          { from: -3, to: -4 },
          { from: -4, to: -5 },
          { from: -5, to: -6 },
          { from: -6, to: -7 },
          { from: -1, to: -7, text: "呵呵" }
        ]
      }
    };
  }
};
</script>