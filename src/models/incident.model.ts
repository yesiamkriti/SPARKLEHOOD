import mongoose, { Document, Schema } from 'mongoose';

export interface IncidentDocument extends Document {
  title: string;
  description: string;
  severity: 'Low' | 'Medium' | 'High';
  reported_at: Date;
}

const IncidentSchema: Schema = new Schema<IncidentDocument>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  severity: {
    type: String,
    enum: ['Low', 'Medium', 'High'],
    required: true
  },
  reported_at: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model<IncidentDocument>('Incident', IncidentSchema);
