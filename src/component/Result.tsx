"use client";

const Result = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div>
      {children}
      <div>
        <div>링크 복사</div>
        <div>카카오 공유하기</div>
      </div>
    </div>
  );
};

export default Result;
