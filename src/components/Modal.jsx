export default function Modal({ title, children, maxWight = 27, open, onClose}) {
  return (
    <>
      {open && (
        <div>
          <div className="fixed inset-0 bg-white opacity-70 z-20"></div>
          <div className="fixed inset-0 z-30">
            <div className="flex justify-center items-center min-h-full p-4">
              <div
                className="bg-blue-950 text-white rounded-lg w-full shadow-2xl border"
                style={{ maxWidth: `${maxWight}rem` }}
              >
                <div className="flex justify-center p-6 border-b">
                  <div className="font-semibold text-xl">{title}</div>
                </div>
                <div>{children}</div>
                <div className="flex justify-center text-sm cursor-pointer p-3 border-t" onClick={onClose}>
                  Cancel
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
