const mongoose = require("mongoose");

const ReservationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },

    date: { type: String, required: true },
    time: { type: String, required: true },

    guests: { type: Number, required: true, min: 1 },

    selectedItems: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "MenuItem"
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Reservation", ReservationSchema);
