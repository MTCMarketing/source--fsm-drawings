import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

/* -----------------------------
   🔧 Global Config
----------------------------- */
const IMAGE_KIT_KEY = "private_lZwp+f0MfssO9x4olagRfJ3Gt6Q=";
const FETCH_LIMIT = 200; // how many items to fetch from ImageKit at once
const X_PER_PAGE = 20; // how many items to show per page in the UI

/* -----------------------------
   Basic Styles
----------------------------- */
const pageStyles = {
  color: "#232129",
  padding: 40,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = { marginBottom: 24 };
const listStyles = { listStyle: "none", padding: 0, marginTop: 24 };
const listItemStyles = {
  border: "1px solid #eee",
  padding: "12px 16px",
  borderRadius: 8,
  marginBottom: 12,
  background: "#fafafa",
  boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
};
const buttonStyles = {
  background: "#663399",
  color: "white",
  padding: "6px 10px",
  border: "none",
  borderRadius: 4,
  cursor: "pointer",
  fontWeight: 600,
  fontSize: 13,
};

/* -----------------------------
   FileCard Component
----------------------------- */
const FileCard: React.FC<{ file: any }> = ({ file }) => {
  const [previewSrc, setPreviewSrc] = React.useState(
    `${file.url}?tr=w-300,h-300,fo-auto`
  );

  return (
    <li style={listItemStyles}>
      <img
        src={previewSrc}
        alt={file.name}
        style={{
          width: 300,
          height: 300,
          objectFit: "cover",
          borderRadius: 8,
          transition: "opacity 0.3s ease-in-out",
          display: "block",
          marginBottom: 10,
        }}
      />

      <div>
        <strong>{file.name}</strong>
        <br />
        <small>
          {file.width}×{file.height}px — {(file.size / 1024).toFixed(1)} KB
        </small>
        <br />
        <a href={file.url} target="_blank" rel="noopener noreferrer">
          {file.filePath}
        </a>
        <br />
        <em>{new Date(file.createdAt).toLocaleString()}</em>
      </div>

      {file.AITags && file.AITags.length > 0 && (
        <div style={{ marginTop: 10 }}>
          <strong>AI Tags:</strong>
          <ul style={{ paddingLeft: 20, margin: "6px 0" }}>
            {file.AITags.map((tag: any, i: number) => (
              <li key={i}>
                {tag.name}{" "}
                <small style={{ color: "#888" }}>
                  ({tag.confidence.toFixed(1)}%)
                </small>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div style={{ marginTop: 10, display: "flex", gap: 6, flexWrap: "wrap" }}>
        <button
          style={buttonStyles}
          onClick={() => setPreviewSrc(`${file.url}?tr=w-100,h-100,fo-auto`)}
        >
          Thumbnail
        </button>
        <button
          style={buttonStyles}
          onClick={() => setPreviewSrc(`${file.url}?tr=w-400,fo-auto`)}
        >
          Mobile
        </button>
        <button
          style={buttonStyles}
          onClick={() => setPreviewSrc(`${file.url}?tr=w-1200,fo-auto`)}
        >
          Desktop
        </button>
        <button
          style={buttonStyles}
          onClick={() => setPreviewSrc(`${file.url}?tr=w-800,f-avif,fo-auto`)}
        >
          AVIF (800px)
        </button>
      </div>
    </li>
  );
};

/* -----------------------------
   Main Dashboard
----------------------------- */
const IndexPage: React.FC<PageProps> = () => {
  const [files, setFiles] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [total, setTotal] = React.useState(0);
  const [error, setError] = React.useState<string | null>(null);
  const [page, setPage] = React.useState(1);

  const totalPages = Math.ceil(total / X_PER_PAGE);

  async function fetchAllFiles() {
    setLoading(true);
    setError(null);
    let skip = 0;
    let all: any[] = [];

    try {
      while (true) {
        const res = await fetch(
          `https://api.imagekit.io/v1/files?limit=${FETCH_LIMIT}&skip=${skip}`,
          {
            headers: {
              Authorization: "Basic " + btoa(`${IMAGE_KIT_KEY}:`),
            },
          }
        );
        if (!res.ok) throw new Error("Failed to fetch files");
        const data = await res.json();
        all = [...all, ...data];
        if (data.length < FETCH_LIMIT) break;
        skip += FETCH_LIMIT;
      }
      setFiles(all);
      setTotal(all.length);
    } catch (err: any) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    fetchAllFiles();
  }, []);

  const start = (page - 1) * X_PER_PAGE;
  const end = start + X_PER_PAGE;
  const paginatedFiles = files.slice(start, end);

  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>🖼 ImageKit File Dashboard</h1>
      <button style={buttonStyles} onClick={fetchAllFiles} disabled={loading}>
        {loading ? "Loading..." : "Refresh"}
      </button>

      {error && <p style={{ color: "red" }}>❌ {error}</p>}
      <p>
        Total Files: <strong>{total}</strong> — Showing{" "}
        <strong>
          {start + 1}–{Math.min(end, total)}
        </strong>
      </p>

      <ul style={listStyles}>
        {paginatedFiles.map((file) => (
          <FileCard key={file.fileId} file={file} />
        ))}
      </ul>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div style={{ marginTop: 30, display: "flex", gap: 10 }}>
          <button
            style={buttonStyles}
            disabled={page === 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
          >
            ← Prev
          </button>
          <span style={{ alignSelf: "center" }}>
            Page <strong>{page}</strong> of <strong>{totalPages}</strong>
          </span>
          <button
            style={buttonStyles}
            disabled={page === totalPages}
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          >
            Next →
          </button>
        </div>
      )}
    </main>
  );
};

export default IndexPage;
export const Head: HeadFC = () => <title>ImageKit Dashboard</title>;
