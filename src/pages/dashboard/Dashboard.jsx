import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { mois: "Jan", contrats: 120 },
  { mois: "Fév", contrats: 140 },
  { mois: "Mar", contrats: 180 },
  { mois: "Avr", contrats: 160 },
  { mois: "Mai", contrats: 210 },
  { mois: "Juin", contrats: 250 },
  { mois: "Juil", contrats: 230 },
  { mois: "Août", contrats: 270 },
  { mois: "Sep", contrats: 300 },
  { mois: "Oct", contrats: 280 },
  { mois: "Nov", contrats: 310 },
  { mois: "Déc", contrats: 350 },
];

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
    
      <div className="flex items-center justify-between">
        <h1 className="text-text text-4xl font-bold">
          Welcome, <span className="font-light text-text">George</span>
        </h1>
        <button className="px-4 py-2 rounded-lg font-semibold text-text bg-primary">
          Nouveau contrat
        </button>
      </div>


      <div className="flex gap-3 flex-wrap">
        {Array(4)
          .fill(0)
          .map((_, idx) => (
            <div key={idx} className="flex-1 p-6 rounded-lg bg-card">
              <h4 className="text-sm font-medium text-text-2">Net revenu</h4>
              <h1 className="mt-4 text-4xl font-semibold text-text">AR 450,000</h1>
              <p className="mt-2 flex items-center gap-2 text-sm text-text-2">
                <FontAwesomeIcon icon={faChartLine} className="text-success" />
                <span className="font-medium text-success">0.4%</span>
                <span className="font-light text-text">vs last month</span>
              </p>
            </div>
          ))}
      </div>

   
      <div className="flex gap-3 h-[300px]">
        <div className="flex-1 p-6 rounded-lg bg-card">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <defs>
                <linearGradient id="colorContrat" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--success)" stopOpacity={0.7} />
                  <stop offset="100%" stopColor="var(--success)" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="mois" stroke="var(--text-2)" />
              <YAxis stroke="var(--text-2)" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--card-2)",
                  border: "none",
                  color: "var(--text)",
                  borderRadius: "8px",
                }}
                labelStyle={{ color: "var(--text-2)" }}
              />
              <Line
                type="monotone"
                dataKey="contrats"
                stroke="var(--success)"
                strokeWidth={3}
                dot={false}
                fill="url(#colorContrat)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="w-[40%] h-full flex flex-col justify-between p-6 rounded-lg bg-card">
          <div>
            <h4 className="text-sm font-medium text-text-2">Net revenu</h4>
            <h1 className="mt-4 text-4xl font-semibold text-text">AR 450,000</h1>
          </div>
          <p className="mt-2 flex items-center gap-2 text-sm text-text-2">
            <FontAwesomeIcon icon={faChartLine} className="text-success" />
            <span className="text-success font-medium">0.4%</span>
            <span className="font-light text-text">vs last month</span>
          </p>
        </div>
      </div>


      <div className="p-6 rounded-lg bg-card">
        <div className="flex justify-between items-center">
          <h4 className="text-xl font-medium text-text">Transaction history</h4>
          <div className="flex gap-2">
            <button className="px-2 py-1 rounded-lg text-text bg-bg-2">Export PDF</button>
            <button className="px-2 py-1 rounded-lg font-bold text-text bg-primary">
              Reload
            </button>
          </div>
        </div>

       
        <div className="flex gap-5 mt-4 bg-card-2 p-3 rounded-lg">
          <div className="w-[2.5%] text-text-2 font-semibold">ID</div>
          <div className="w-[50%] text-text-2 font-semibold">Contrat name</div>
          <div className="w-[15%] text-text-2 font-semibold">Type</div>
          <div className="w-[15%] text-text-2 font-semibold">Name</div>
        </div>


        {Array(3)
          .fill(0)
          .map((_, idx) => (
            <div
              key={idx}
              className="flex gap-5 mt-4 p-3 rounded-lg border-b"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="w-[2.5%] text-text-2">#{idx + 1}</div>
              <div className="w-[50%] text-text">Contrat Example</div>
              <div className="w-[15%] text-text">Type A</div>
              <div className="w-[15%] text-text">George</div>
            </div>
          ))}
      </div>
    </div>
  );
}
